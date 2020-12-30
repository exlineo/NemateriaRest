import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class DispatchError implements ExceptionFilter {
    catch(err: any, host: ArgumentsHost): any;
}
