/**
Estudante: Augusto Castejon Santana
Turma: An�lise e Desenvolvimento de Sistemas
Per�odo: 1�
Prof. Ernani Cl�udio Borges
Data: //2022
Email: augusto.santana@estudante.iftm.edu.br
*/

///==========================================================
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <math.h>
#include <time.h>
#include <locale.h>

#define tam 10

/**<

*/

//======= DECLARAR A EXISTENCIA DOS PROTOTIPOS =======


//============  CRIARMOS OS MODULOS ==================


//====================================================
#include<stdio.h>
#include <locale.h>

int main()
{

    setlocale(LC_ALL, "");
    int num, i, resultado = 0;

    printf("\n Digite um n�mero: ");
    fflush(stdin);
    scanf("%d", &num);

    for (i = 2; i <= num / 2; i++) {
       if (num % i == 0) {
          resultado++;
          break;
       }
    }

    if (resultado == 0)
       printf("\n %d � um n�mero primo\n", num);
    else
       printf("\n %d n�o � um n�mero primo", num);

       printf("\n\n");

    return 0;
}
