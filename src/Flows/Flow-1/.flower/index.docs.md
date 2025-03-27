# node-1
## START
Nodo iniziale

- -> node-2 (basic next)

# node-2
## NODO INPUT
In questo nodo inseriamo un campo di input testuale, in base al valore del campo di input, scegliamo se andare nel nodo success o in quello error

- -> success (Success Input)
- -> error (Error input)

# success
## INPUT SUCCESS
Il valore dell'input rispetta la regola, possiamo andare avanti con il flusso

- -> node-3

# error
## INPUT ERROR
se il valore dell'input non rispetta la regola, andiamo qui

# node-3
## NODO AZIONE
questo nodo effettua un azione e sceglie tramite delle regole se andare in success o in error senza alcuna azione da parte dell'utente, in questo caso effettuiamo una chiamata api

- -> successApi (Api success)
- -> errorApi (Api Error)

# successApi
## API SUCCESS NODE
Api call goes as expected

- -> node-4 (to final node)

# errorApi
## API ERROR NODE
The api call has a problem, you could go back to the previous non-action node and retry

# node-4
## FINAL NODE
Nodo finale con un button reset per ripetere il flusso da capo

