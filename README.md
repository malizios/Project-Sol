# Untitled Card Game
*A yet-to-be-named mobile card game in the same vein as Magic the Gathering and Hearthstone.*

## About
Collectible card games are strategic, addicting, and fun so we wanted to make one.

### Getting Technical
This application is built to support matchmaking amongst multiple react-native clients via a Node server. Game state is implemented with Redux both on the server and client. Synchronization of state is performed with socket.io.

## Getting Started
Current version of the server and client are located in the [app](/app) folder.

The living, breathing, subject-to-change rules can be found [here](/docs/game_rules.md)

Currently the applications in the [game_script](/game_script) folder are used to perform mock games and thereby test our rules, decks, and cards.
