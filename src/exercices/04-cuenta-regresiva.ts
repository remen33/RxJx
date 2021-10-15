import { interval, map, take, tap } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  // let inicio = 7;
  // const countdown$ = interval(700).pipe(
  //   // Usar los operadores necesarios
  //   // para realizar la cuenta regresiva
  //   take(8),
  //   map((value) => {
  //     return inicio;
  //   }),
  //   tap(() => {
  //     inicio--;
  //   })
  // );

  const inicio = 7;

  const countdown$ = interval(700).pipe(
    // Usar los operadores necesarios
    // para realizar la cuenta regresiva
    take(8),
    map((number) => inicio - number)
  );

  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();
