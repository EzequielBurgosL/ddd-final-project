
import { Result } from './Result';
import { UseCaseError } from './UseCaseError';

export namespace GenericAppError {
  export class UnexpectedError extends Result<UseCaseError> {
    public constructor(err: any) {
      super(false, 'An unexpected error occurred.');
    }

    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
}