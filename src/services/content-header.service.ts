import { Subject } from 'rxjs';

const subject = new Subject<string>();

export const headerService = {
    setHeader:( header: string) => subject.next(header),
    chearHeader: () => subject.next(),
    getHeader: () => subject.asObservable()
};