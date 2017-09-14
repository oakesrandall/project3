
export class Favorite {

	public restaurantName: string;
	// public restaurantPhone: string;
	// public imagePath: string;
	public website: string;
	public address: string;
	public image: string;
	// public rating: number;
	
	constructor(restaurantName: string, address: string, website: string, image: string) {
		this.restaurantName = restaurantName;
		this.address = address;
		this.website = website;
		this.image = image;

	}
}