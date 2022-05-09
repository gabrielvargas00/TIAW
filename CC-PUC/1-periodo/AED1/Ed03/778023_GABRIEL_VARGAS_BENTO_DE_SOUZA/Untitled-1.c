/*
  Nome: Gabriel Vargas Bento
  Data
  prova
*/

// deendencias
   #include "io.h"

/** 
  Method 00 - ao faz nada
*/

void method00 ( )
{
    // nada
} // end method00 ( )


/**
 Questao01 - ler
             contar
             mostar
 @return - valores
 @param x - quantidade de numeroa a serem lidos
 */

int questao01 ( int x )
{
    int numero = 0;
    int contador = 0;
    int quantidade = 0;

    x=IO_readint ( "\nvezes: ");

    if ( x <= 0 )
    {
        IO_printf ("\ninvalido");
        x=IO_readint ( "\nvezes: ");
    }

    for ( contador = 0; contador < x; contador = contador + 1 )
    {
        numero=IO_readint ( "\nnumero: ");

        if ( ( numero % 2 == 0) &&
             ( numero > 0 && numero < 50 ) )
        {
            quantidade = quantidade + 1;
        }
    }

    return ( quantidade );
    
}

/**
 Method01 - questao1.
 */

void method01 ( )
{
    // definir dado
       int x = 0;
       int resultado = 0;

    // identificar
       IO_id ( "questao 1" );

    // funcao
       resultado = questao01 ( x );

    // mostrar
       IO_printf ( "ha %d numeros", resultado );

    // encerrar
       IO_pause ( "Apertar ENTER para continuar" );

} // end method01 ( )

/** 
  Method 00 - ao faz nada
*/

void method02 ( )
{
    // nada
} // end method02 ( )

/**
 Questao03 - ler
             contar
             mostar
 @return - valores
 @param text - quantidade de numeroa a serem lidos
 */

int questao03 ( chars text )
{
    int tamanho = 0;
    int contador = 0;
    int quantidade = 0;

    char simbolo = '_';

    strcpy ( text, STR_EMPTY );

    text = IO_readln ( "\ntexto: " );

    tamanho = strlen ( text );

    IO_printf ( "tamanho: %d ", tamanho );

    for ( contador = 0; contador < tamanho; contador = contador + 1 )
    {
        simbolo = text [contador];

        if ( ( ( simbolo <= 'z') && (  simbolo >= 'a' ) ) ||
             ( ( simbolo <= 'Z') && (  simbolo >= 'A' ) ) )
             
        {
            IO_printf ( "\n[%d]: %c", contador, simbolo );
            quantidade = quantidade + 1;
        }
    }

    return ( quantidade );
    
}

/**
 Method03 - 3.
 */

void method03 ( )
{
    // definir dado
       int resultado = 0;

       chars text = IO_new_chars (STR_SIZE);
       strcpy ( text, STR_EMPTY );

    // identificar
       IO_id ( "questao 1" );

    // funcao
       resultado = questao03 ( text );

    // mostrar
       IO_printf ( "\n\nha %d letras", resultado );

    // encerrar
       IO_pause ( "Apertar ENTER para continuar" );

} // end method03 ( )

/*
 Funcao principal.
 @return codigo de encerramento
*/

int main ( )
{
    // definir dado
       int x = 0;
    
    // repetir ate desejar parar
       do
       {
            // identificar
               IO_id ( "Exemplo05E2 - Programa - v0.0" );

            // ler do teclado
               IO_println ( "Opcoes" );
               IO_println ( "0  - parar" );
               IO_println ( "1  - mostrar certa quantidade de valores                                  " );
               IO_println ( "2  - mostrar certa quantidade de valores pares                            " );
               IO_println ( "3  - mostrar certa quantidade de valores pares (alternativo)              " );
               IO_println ( "4  - mostrar certa quantidade de valores pares (decrescente)              " );

               x =  IO_readint ( "Entrar com uma opcao: " );
            
            // testar valor
               switch ( x )
               {
               case 0:
                   method00 ( );
                   break;

                case 1:
                   method01 ( );
                   break;

                case 2:
                   method02 ( );
                   break;

                case 3:
                   method03 ( );
                   break;
               
               default:
                   IO_pause ( "ERRO: Valor invalido!" );
                   break;
               } // end switch

       } while ( x != 0 );
    
    // encerrar
       IO_pause ( "Apertar ENTER para terminar" );
       return ( 0 );
       
} // end main ( )