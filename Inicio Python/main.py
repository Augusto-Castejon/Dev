"""
# Printando a e seu tipo, mudando o tipo e re-printando
a=10
print(a);
print(type(a));
a = "alguma coisa"
print(a);
print(type(a));
"""

"""
Descobrir como utilizar if e else em uma linha
a = 5
paridade = 'par' if a %2 = 0 else 'impar'
print(paridade)
"""

# Recebendo valor e printando, caso o valor recebido seja igual a fim (já com o lower), finaliza
x = "oi"
while x.lower() != 'fim':
    x = input("Digite seu nome ou fim para finalizar: ") 
    if x.lower() != 'fim':
        print(x);
