<h3>This is a challenge from freecodecamp.org (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards)</h3>


<h1>Counting Cards</h1>
<p>In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.</p>

<p>Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.</p>

<table>
  <tr>
    <th>Count Change</th>
    <th>Cards</th> 
  </tr>
  <tr>
    <td>+1</td>
    <td>2, 3, 4, 5, 6</td>

  </tr>
  <tr>
    <td>0</td>
    <td>7, 8, 9</td>
  </tr>
   <tr>
    <td>-1</td>
    <td>10, 'J', 'Q', 'K', 'A'</td>
  </tr>
 </table>

<p>You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.</p>