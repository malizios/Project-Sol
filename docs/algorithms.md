# Card Value Algorithms
*our current approach to balance*
## Cost
### Variables
- *hp* and *atk* cost about 1/3 of their weight
- *def* is the most valuable and costs about 1/2 of its weight
- *effect* has to be translated to a numerical value

### Effect Value
```
getEffectValue(effect) =>
  // initial cost
  value = 0
  if(the effect applies to only 1 card):
    value += 1
  else
    value += 2
  // if the card says "+1atk/+1def" the number of effects would be 2
  value += NUM_CARD_EFFECTS
```
### Final Equation
`cost = ceil((hp+atk)/3)+ceil(def/2)+getEffectValue(effect)`
## Sellback
### Variables
- The *cost* of the card

### Final Equation
`sellback = ceil(cost/2)`
