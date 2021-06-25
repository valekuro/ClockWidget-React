import { useQuery } from "react-query";
import TestimonialProps from "../types/Testimonial/Testimonial";

//personalized hook that allows you to fetch data through react-query
export function useFetchData(name: string, url: string) {
  const query = useQuery(name, async () => {
    const response = await fetch(url);
    return await response.json();
  });
  return query.data;
}

//if you need to merge two responses
//todo: può essere resa ancora più generica
export function joinData(responseOne: Object | undefined, responseTwo: Object | undefined) {
  let merged: TestimonialProps[] = [];
  if (responseOne && responseTwo) {
    for (const [key, itemTwo] of Object.entries(responseTwo)) {
      for (const [key, itemOne] of Object.entries(responseOne)) {
        if (itemOne.id === itemTwo.userId) {
          merged.push({
            user: itemOne.name,
            id: itemTwo.id,
            post: itemTwo.body,
            title: itemTwo.title,
          });
        }
      }
    }
  }
  return merged;
}
