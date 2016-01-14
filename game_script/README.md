# Game Script Helper

We use the `babel-node` transpiler so make sure to:
```
npm install --global babel-node
```

### Running a game
```
cd game_script
npm install
babel-node scripter.js
```
Game-state will be recorded in `game_script/scripter_log.txt`

### Testing the game
To run a single test
```
npm run test
```

To watch for changes and test
```
npm run test:watch
```