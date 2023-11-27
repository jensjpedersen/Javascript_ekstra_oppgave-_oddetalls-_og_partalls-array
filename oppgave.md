
Oppgaven:
1. Lag først et array som har 100 tilfeldige tall i seg (tall mellom 1 og
   100000). Bruk loop for å generere dette. Dette arrayet brukes videre i
   oppgaven. Du skal med andre ord ikke skrive 100 forskjellige tall selv i et
   array, men generere det med loops.

2. lag en funksjon som bruker array metoden .filter til å filtrere ut oddetall
   og partall. funksjonen skal returnere ut et nytt array hvor oddetall og
   partall er delt opp (tips: returner odds og evens som et object).

sånn her burde konsollen se ut (kun brukt 10 tilfeldige tall her for at det ikke skal bli så langt):

```
{odds: Array(8), evens: Array(2)}
        evens: Array(2)
          0: 63316
          1: 37426
          length: 2
      [[Prototype]]: Array(0)
        odds: Array(8)
          0: 823
          1: 90203
          2: 66723
          3: 81841
          4: 2397
          5: 67267
          6: 29847
          7: 18233
          length: 8
     [[Prototype]]: Array(0)
[[Prototype]]: Object
```


3. konsoll logg antall oddetall og partall med å referere til .length. (tips: const {odds, evens} = .......)

4. konsoll logg summen av alle oddetall og konsoll logg summen av alle partall (altså separat)

5. konsoll log hvilken av de 2 summene i oppgave 4 som er størst

6. finn differansen mellom odds og evens (største - minste). Konsoll logg resultatet

7.  bruk conditionals for å konsoll logge ut en setning som forteller hvilken
    sum som er størst og hvilken som er minst. Ta med antall odds og even i
    stringen som konsoll logges ut. Eks på hva som kan vises:

Summen av de 60 oddetallene er mindre enn summen av de 40 partallene
