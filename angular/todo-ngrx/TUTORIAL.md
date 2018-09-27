# TUTORIAL

## Step 1 - Create a angular app
ng new [APP_NAME] --routing

## Step 2 - Install @ngrx/schematics from npm
npm install @ngrx/schematics --save-dev

## Step 3 - Install NgRx dependencies
npm install @ngrx/store --save
npm install @ngrx/store-devtools --save
npm install @ngrx/effects --save
npm install @ngrx/entity --save


## Step 4 - Add @ngrx/schematics collection in angular.json
ng config cli.defaultCollection @ngrx/schematics

## Step 5 - Configure  @ngrx/schematics as a default schematics in angular.json
"schematics": {
    "@ngrx/schematics:component": {
        "styleext": "scss"
    }
}


## Step 6 - Initial State Setup
ng generate @ngrx/schematics:store State --root --module app.module.ts





