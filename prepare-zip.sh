#!/bin/bash

PROJECT_NAME="."
CLEAN_FOLDER="${PROJECT_NAME}-clean"
ZIP_NAME="${PROJECT_NAME}.zip"

rm -rf $CLEAN_FOLDER $ZIP_NAME

rsync -av --progress ./ $CLEAN_FOLDER --exclude node_modules --exclude .git --exclude .env --exclude dist --exclude build --exclude .next --exclude "*.log"

zip -r $ZIP_NAME $CLEAN_FOLDER

echo "✅ پروژه با موفقیت زیپ شد: $ZIP_NAME"