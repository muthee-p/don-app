import { loadStripe} from '@stripe/stripe-js';


export async function checkout({lineItems}){
	let stripePromise = null;

	const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

	}
	return stripePromise;

}
const stripe = await getStripe();

await stripe.redirectToCheckout({
	
	mode: 'payment',
	lineItems: [{
		price: "price_1N3zmaAy6kbtVnGKpjDBBStw",
		quantity: 1
	},
	{
       price: "price_1N3zjrAy6kbtVnGKRd0NuBNu",
         quantity: 1
     },
	],
	//successUrl: window.location.href,
	successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
	cancelUrl: window.location.origin
})

}