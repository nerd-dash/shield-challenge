import {Injectable} from "@angular/core";
import {Trivia} from "../../models";
import {Observable, of, tap} from "rxjs";

@Injectable()
export class TriviaService {
    getTrivia(): Observable<Trivia[]> {
        return of(
            this.getTriviaFromLocalStorage()
        )
    }

    saveTrivia(trivia: Trivia): Observable<Trivia> {
        this.saveTriviaToLocalStorage(trivia);
        return of(trivia).pipe(tap(() => console.log('saveTrivia', trivia)));
    }

    private getTriviaFromLocalStorage(): Trivia[] {
        return JSON.parse(localStorage.getItem('trivia') ?? '[]') as Trivia[]
    }

    private saveTriviaToLocalStorage(trivia: Trivia) {
        localStorage.setItem('trivia', JSON.stringify([...this.getTriviaFromLocalStorage(), trivia]))
    }
}
