# node-1
## Start
Nodo iniziale

- -> node-2 (basic next)

# node-2
## Nodo input
In questo nodo inseriamo un campo di input testuale, in base al valore del campo di input, scegliamo se andare nel nodo success o in quello error

- -> success (Success Input)
- -> error (Error input)

# success
## Input Success
Il valore dell'input rispetta la regola, possiamo andare avanti con il flusso

- -> node-3

# error
## Input Error
se il valore dell'input non rispetta la regola, andiamo qui

# node-3
## Nodo azione
questo nodo effettua un azione e sceglie tramite delle regole se andare in success o in error senza alcuna azione da parte dell'utente, in questo caso effettuiamo una chiamata api

- -> successApi (Api success)
- -> errorApi (Api Error)

# successApi
## Api success node
Api call goes as expected

- -> node-4 (to final node)

# errorApi
## Api error node
The api call has a problem, you could go back to the previous non-action node and retry

# node-4
## Final node
Nodo finale con un button reset per ripetere il flusso da capo

