## Requirement Part 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

## Noun & Verb

Noun: bagel(item), basket, order
Verb: order, add, change, remove

## Domain Model

| Objects | Properties             |
| ------- | ---------------------- |
| item    | name @String           |
| 3       | basket @Array[ @items] |

| Methods                 | Output                 |
| ----------------------- | ---------------------- |
| addToBasket(@item)      | basket @Array[ @items] |
| removeFromBasket(@item) | basket @Array[ @items] |

- add bagel @String with addToBasket(@name) => return the basket @Array[@name] with the added bagel @String
- remove bagel @String with removeFromBasket(@name) => return the basket @Array[@name] without the removed bagel @String
<!--

## Requirement Part 2

As a member of the public,
So that I can not overfill my small bagel basket,
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales,
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.

## Noun & Verb

Noun: basket, item, basket capacity, larger capacity
Verb: cannot overfill, is full, add, create baskets, remove

## Domain Model

| Objects  | Properties       |
| -------- | ---------------- |
| capacity | capacity @Number |

| Methods                               | Output                                                                             |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| isFull()                              | @Boolean (true: @String 'your basket if full', false: @String 'continue to order') |
| createBigBasket()                     | ---                                                                                |
| removeFromBasket(@name) (from part 1) | @Boolean (true: basket @Array[@name] false: @String 'You haven't order this bagel  |

- check if the length of basket @Array[@name] is more than capacity @Number with isFull()
  => if true return @String 'your basket if full', if false return 'continue to order' and tell how many bagels you're able to buy
- With createBigBasket(), capacity @Number will change to a bigger number
- Utilizing removeFromBasket(@name) from part 1, if the bagel @name includes in basket @Array[@name], return basket @Array[@name] without the removed bagel @String; if not, return @String 'You haven't order this bagel -->
