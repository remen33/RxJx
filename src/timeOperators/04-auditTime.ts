
import { interval, fromEvent, sample, auditTime, tap, map} from "rxjs";

/// AuditTime es emitir el ultimo valor que el observable a emitido por un periodo de tiempo dterminado.
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x }) => x),
    tap(value => console.log('tap', value)),
    auditTime(2000),    
)
.subscribe(console.log);