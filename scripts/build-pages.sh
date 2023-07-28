#!/bin/bash

# .github/workflows/deploy-to-pages.yml calls "npm run build-pages" with a
# list of branches to build and deploy to GitHub Pages. This script then builds
# each branch and creates a directory in the _site directory for each branch.
# The _site directory is then deployed to GitHub Pages.

# for testing, you can run this script locally
# e.g. ./scripts/build-pages.sh main 1234-branch
# and then open _site/index.html in your browser
env
BRANCHES=${@}

# make sure "main" is in the list of branches
if [[ ! " ${BRANCHES[@]} " =~ "main" ]]; then
    BRANCHES+=("main")
fi

echo "Building pages for branches:${BRANCHES[@]}"

ROOT=$(git rev-parse --show-toplevel)
cd ${ROOT}

# pages are deployed from the _site directory
if [ -d _site ]; then
    rm -rf _site
fi
mkdir _site

LINKS=()
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
for BRANCH in ${BRANCHES[@]}; do
    echo "Building branch: ${BRANCH}"
    # checkout the branch
    if [ "${BRANCH}" != "${CURRENT_BRANCH}" ]; then
        rm -rf .git/worktrees/${BRANCH}
        git worktree add -B ${BRANCH} .git/worktrees/${BRANCH} remotes/origin/${BRANCH}
        cd .git/worktrees/${BRANCH}
        cp ${ROOT}/apiKey.js .
    fi
    npm ci
    # build the app
    npm run build
    npm run create-version
    mv dist ${ROOT}/_site/${BRANCH}
    # build the library zip
    VERSION="microverse-library.${BRANCH}-$(git show -s --format='%ad-%h' --date=format:'%Y%m%d')"
    npm run build-lib
    mv dist $VERSION
    zip -r ${ROOT}/_site/${BRANCH}/$VERSION.zip $VERSION
    rm -rf $VERSION
    # create links for the index page
    COMMIT=$(git show -s --format='%ad %H' --date=format:'%Y-%m-%d %H:%M:%S')
    LINKS+=("<dt><a href=\"Enter\">${BRANCH}</a><
    /dt>")
    if [ "${BRANCH}" != "${CURRENT_BRANCH}" ]; then
        cd ${ROOT}
        git worktree remove --force .git/worktrees/${BRANCH}
    fi
done

cd ${ROOT}

echo "Building index page"
cat > _site/index.html <<EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <title>H Basement</title>
  <link id="microverse-css" rel="stylesheet" href="./assets/css/microverse.css" />
  <link href="./main/assets/fonts/css/all.min.css" rel="stylesheet">
 <script defer src="./main/lib/index-18858f3f.js"></script>
</head>

<body class="no-select">
  <div id="hud">
    <div class="container">
      <div class="controllers" style="border:1px solid red">
        <div id="homeBtn" class="btn btn-ui">
          <i class="fas fa-solid fa-house-user no-pointer-events"></i>
        </div>
        <div id="editModeBtn" mobile="false" class="btn">
          <i class="fas fa-solid fa-angle-up no-pointer-events"></i>
        </div>
        <div id="worldMenuBtn" class="btn btn-ui">
          <i class="fa fa-solid fa-bars no-pointer-events"></i>
        </div>
        <input id="ghostSlider" type="range" min="0" max="100">
      </div>
    </div>
  </div>
  <div id="shell-hud">
    <div id="fullscreenBtn" class="btn btn-ui">
      <i class="fas fa-solid fa-expand"></i>
    </div>
    <div id="joystick">
        <div id="trackingknob"></div>
        <div id="knob"></div>
        <div id="joystick-arrows">
          <div id="joystick-arrow-n" class="joystick-arrow"></div>
          <div id="joystick-arrow-e" class="joystick-arrow"></div>
          <div id="joystick-arrow-w" class="joystick-arrow"></div>
          <div id="joystick-arrow-s" class="joystick-arrow"></div>
        </div>
    </div>
  </div>

    <h1>The Basement</h1>
    <dl>
        ${LINKS[@]}
    </dl>
    <script>
        const {search, hash} = window.location;
        const links = document.getElementsByTagName('a');
        for (const link of links) {
            const url = new URL(link.href);
            url.search = search;
            url.hash = hash;
            link.href = url.toString();
        }
    </script>
</body>
</html>
EOF
