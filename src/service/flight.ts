// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { FlightSearchContentProps } from "@/app/flights/search/FlightSearchContent";
// import config from "@/config";

// export async function flightSearch(
//   payload: FlightSearchContentProps,
// ): Promise<any> {
//   try {
//     const res = await fetch(`${config.flight}/flight/b2c/search`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     // Return success response
//     return res;
//   } catch (error) {
//     // Handle any network or unexpected errors
//     return {
//       success: false,
//       errors: "Something went wrong. Please try again.",
//     };
//   }
// }
