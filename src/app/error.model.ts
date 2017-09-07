export class Error {
	
	public code: string;
	public message: string;
	
	
		
	constructor(message: string, code: string) {
		this.code = code;
		this.message = message;
		
	
	}
}