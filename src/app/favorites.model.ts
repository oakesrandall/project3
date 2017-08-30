
export class Favorite {

	public restaurantName: string;
	public restaurantPhone: string;
	public imagePath: string;
	public website: string;
	public address: string;
	public rating: number;
	
	constructor(restaurantName: string, restaurantPhone: string, address: string, imagePath: string, website: string, rating: number) {
		this.restaurantName = restaurantName;
		this.restaurantPhone = restaurantPhone;
		this.address = address;
		this.imagePath = imagePath;
		this.website = website;
		this.rating = rating;

	}
}