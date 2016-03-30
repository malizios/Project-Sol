# Game Rules
*The likely-to-change rules we're going with at the moment:*

## Objective
### Normal Mode
- The first player to reach the score limit wins the game.
- If a player is unable to draw anymore cards from their deck, they lose the game.

### Timed Mode
- Timed Mode is restricted to 5 Minutes
- Same rules as normal mode. If the time limit is reached, players finish out their last turns and the player with the most victory points wins.

## General

### Turn Structure

1. *Discard/Sellback Phase*: During this phase a *player* may choose any *card*s in *hand* to *discard* or *field* to *sell-back*. If a *players* hand size is larger than the maximum hand size, the *player* must discard cards until they are below or at the maximum limit of 7 cards.
2. *Draw/Resource Allocation Phase*: The *player* *draw*s a *card* from their *deck* and puts it in *hand*. The player increases their resource by the PPT amount.
3. *Deploy Phase*: The *player* pays *card*(s) *resource* cost and *deploy*s it to the *field*
4. *Attack Phase*: The *player* chooses *cards* from their field with which to attack. The *player* first selects the attacking card, the attacking cards target, and the order in which the attacks will proceed. After declaring all attackers, the attacks are carried out in that order. When each attack is carried out the opponent has an opportunity to respond to each attack with any card that can respond to the attack/trap effect. The attacking player may also activate effects in response to the opponents response actions.
5. *Update Phase*: Depending on successful *attack*s, update the stats of the *card*s on *field*
6. *Destroy Phase*: If a *card*'s *hp* has been depleted, it is removed from the *field* and put in the *graveyard*, and it's *point value* is added to the attacking *player*'s *points*
Potentially 2nd deploy phase??
7. *End Phase*: If a game winning condition has been met then the game ends and a victor is declared; otherwise the game transitions to the *opponent*'s turn
Note: potentially we need to check for win/lose conditions here, but someone can

### The Players
- There is a maximum of 2 *player*s in a game
- Each *player* starts the game with a *hand* containing five *card*s drawn from their *deck*
- the *player* that starts the first round of the game does not get a *draw phase* during that turn
- After the *discard phase* a *player* can draw one *card* from their *deck*
- A *player* can play as many *card*s as they want from their *hand* as long as they have the *resource*s
- A *player* begins a game with 10 *resource*
- A *player* begins a game with 2 *resource per turn* (rpt), but gains +1 rpt every turn

### The Field of Play
For each *player*, *card*s exist in one of three places on the *field of play*:

- In the *player*'s *deck*
- In the *player*'s *hand*
- In the *player*'s *boneyard* (probably should use a different word for graveyard)

- Cards are put into play on the *field of play* from the *player*'s *hand*
- Unless a *card* is face-down an opponent can view the *card*'s details
- During the Discard/Sellback Phase a *player* may *sellback* cards from the *field of play*, the sold card is placed at the bottom of the *players* deck.
- Card effects from cards on the *field of play* can activate during any phase.

### The Deck
- A deck has a maximum size of 40 *card*s and a minimum size of 25 *card*s
- A *player* only plays with one *deck* during a match
- The *deck* must be shuffled before play
- Discarded *card*s go to the bottom of the *player*'s *deck* (May need to change)
- Decks can only be comprised of cards of one faction and the netural card deck

### The Hand
- A *player*'s *hand*, in normal play, is not to be shown to other players.
- Maximum of seven *card*s in a *hand*
- Minimum of zero *card*s in a *hand*

### The Cards
**Card Types**

- Resource: give *resource*s to a player
- Attack: Attack *card*s on the field or a *players*'s HP
- Buff: Augment a *card*s attributes
- Trap: *Trap* *card*s apply negative effects to *player*s, the *field*, or a *card*. *Trap* *card*s come in two varieties:
 - *One-Time-Use*: The *card* is placed on the *field of play* face-down. Once *activated* (flipping the *card* face-up), the *card*s effects take place and the *trap* is *destroyed*. *Activation* may occur at any point during the game.
 - *Passive*: The *card* *activates* upon entering the *field of play*; the *card*'s effects last until it is destroyed.

**Faction Specific Card Abilities**
- Swarm cards of the same card name may do combined attacks where the card ATK values are added together in a focused attack to a selected card of the opponent.

- Cunning Cards

- Brute Cards

**Card Rules**

- Every *card* can be attacked/destroyed
- A *card* may only *attack* or *defend* once per turn except during the first round of the game.
- Destroying an opponent's *card* awards the *player* with the destroyed cards point value/reward
- Attacking another *player* directly awards the *player* with points equivalent to the attacking cards attack value.
- A *player* may *attack* an opponent directly only when they don't have *card*s on the field or if a card effect allows the card to attack an opponent directly.
- An *attack* *card* on the *field of play* can *attack* any *card* on the *field of play*
- A *defense* *card* on the *field of play* can *defend* any *card* on the *field of play* (May need to remove, defense changed to buffs)
- An attacking *card* must have a higher attack value than another *card*s defense value to damage its HP unless a card effect states otherwise.
- When a *card*s HP is brought down to zero, the *card* is destroyed and sent to the *boneyard*
- Face-down *trap* *card*s may be attacked to flip them face-up (not *activating* them); the *player* may still activate them after this. Subsequent *attack*s may destroy the *trap* *card*. *One-time use* cards cannot be placed face-down on the field.

### The Resources
Everything in-game is fueled by resources

- A *card* is brought to the *field of play* by paying that *card*s resource cost.
- A *player* can sell-back a *card* from the *field of play*, receiving back a portion of the cost to play the *card*
- A *resource* *card* can generate or steal *resource*s
- The maximum *resource* a *player* can accumulate is 20
- The maximum natural *RPT* a *player* can have is 20. Natural *RPT* is the default increasing *RPT* a player gets. Cards effects can boost this *RPT* past 20.
