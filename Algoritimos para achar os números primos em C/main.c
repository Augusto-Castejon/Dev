/**
Estudante: Augusto Castejon Santana
Turma: Análise e Desenvolvimento de Sistemas
Período: 1°
Prof. Ernani Cláudio Borges
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

    printf("\n Digite um número: ");
    fflush(stdin);
    scanf("%d", &num);

    for (i = 2; i <= num / 2; i++) {
       if (num % i == 0) {
          resultado++;
          break;
       }
    }

    if (resultado == 0)
       printf("\n %d é um número primo\n", num);
    else
       printf("\n %d não é um número primo", num);

       printf("\n\n");

    return 0;
}
