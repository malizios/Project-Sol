import sys
import math

def main():
  
  while True:
    hp = int(raw_input("Enter Hp: "))
    atk = int(raw_input("Enter Atk: "))
    d = int(raw_input("Enter Def: "))
    effect =  int(raw_input("Enter number of effects: "))

    cost = math.ceil((hp + atk) / 3.0) + math.ceil(math.pow(d, 1.25)) + effect
    sellback = math.ceil(cost / 2)
    point = math.ceil(cost / 2)
    print "Cost: " + str(cost)
    print "Sellback: " + str(sellback)
    print "Points: " + str(point) 
    print ""





if __name__ == "__main__":
  main()