import { Credentials } from './lib/credentials';
import { AppleTV } from './lib/appletv';
import { Connection } from './lib/connection';
import { Browser } from './lib/browser';
import { NowPlayingInfo } from './lib/now-playing-info';
import { Message } from './lib/message';
import { SupportedCommand } from './lib/supported-command';
export declare function scan(uniqueIdentifier?: string, timeout?: number): Promise<AppleTV[]>;
/**
* A convenience function to parse a credentials string into a Credentials object.
* @param text  The credentials string.
* @returns A credentials object.
*/
export declare function parseCredentials(text: string): Credentials;
export { AppleTV, Connection, Browser, NowPlayingInfo, Credentials, Message, SupportedCommand };
