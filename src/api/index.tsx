import axios from 'axios';
import { Coords } from 'google-map-react'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw : Coords, ne: Coords) => {
    try {
        // console.log('sw', sw)
        // console.log('ne', ne)
        // const { data: { data } } = await axios.get(URL, {
        //     params: {
        //         bl_latitude: sw.lat,
        //         tr_latitude: ne.lat,
        //         bl_longitude: sw.lng,
        //         tr_longitude: ne.lng,
        //     },
        //     headers: {
        //         'X-RapidAPI-Key': 'd0b87a05d7msh6b0de7367dfc4d9p1c5ef6jsn650aece8c08a',
        //         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        //     }
        // });

        // data test Start

        const data = [
            {
              "location_id": "5382848",
              "name": "Pizzaria 3R Pizza Mais",
              "latitude": "-21.291601",
              "longitude": "-50.348812",
              "num_reviews": "1",
              "timezone": "America/Sao_Paulo",
              "location_string": "Birigui, State of Sao Paulo",
              "awards": [],
              "doubleclick_zone": "sa.brazil.state_of_sao_paulo",
              "preferred_map_engine": "default",
              "raw_ranking": "3.02070689201355",
              "ranking_geo": "Birigui",
              "ranking_geo_id": "1832989",
              "ranking_position": "61",
              "ranking_denominator": "93",
              "ranking_category": "restaurant",
              "ranking": "#55 of 122 Restaurants in Birigui",
              "distance": "0.7617120079954419",
              "distance_string": "0.8 km",
              "bearing": "southeast",
              "rating": "5.0",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "description": "",
              "web_url": "https://www.tripadvisor.com/Restaurant_Review-g1832989-d5382848-Reviews-Pizzaria_3R_Pizza_Mais-Birigui_State_of_Sao_Paulo.html",
              "write_review": "https://www.tripadvisor.com/UserReview-g1832989-d5382848-Pizzaria_3R_Pizza_Mais-Birigui_State_of_Sao_Paulo.html",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "city",
                      "name": "City"
                    }
                  ],
                  "name": "Birigui",
                  "abbrv": null,
                  "location_id": "1832989"
                },
                {
                  "subcategory": [
                    {
                      "key": "state",
                      "name": "State"
                    }
                  ],
                  "name": "State of Sao Paulo",
                  "abbrv": "SP",
                  "location_id": "303598"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Brazil",
                  "abbrv": null,
                  "location_id": "294280"
                }
              ],
              "category": {
                "key": "restaurant",
                "name": "Restaurant"
              },
              "subcategory": [
                {
                  "key": "sit_down",
                  "name": "Sit down"
                }
              ],
              "parent_display_name": "Birigui",
              "is_jfy_enabled": false,
              "nearest_metro_station": [],
              "address_obj": {
                "street1": "Rua Siqueira Campos 1300",
                "street2": "Pricuma",
                "city": "Birigui",
                "state": "SP",
                "country": "Brazil",
                "postalcode": "16200-701"
              },
              "address": "Rua Siqueira Campos 1300 Pricuma, Birigui, State of Sao Paulo 16200-701 Brazil",
              "is_candidate_for_contact_info_suppression": false,
              "cuisine": [
                {
                  "key": "10641",
                  "name": "Pizza"
                }
              ],
              "dietary_restrictions": [],
              "establishment_types": [
                {
                  "key": "10591",
                  "name": "Restaurants"
                }
              ]
            },
            {
              "location_id": "8203221",
              "name": "Carlinhos Lanches",
              "latitude": "-21.291555",
              "longitude": "-50.359802",
              "num_reviews": "0",
              "timezone": "America/Sao_Paulo",
              "location_string": "Birigui, State of Sao Paulo",
              "awards": [],
              "doubleclick_zone": "sa.brazil.state_of_sao_paulo",
              "preferred_map_engine": "default",
              "distance": "0.5482751540295069",
              "distance_string": "0.5 km",
              "bearing": "southwest",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "description": "",
              "web_url": "https://www.tripadvisor.com/Restaurant_Review-g1832989-d8203221-Reviews-Carlinhos_Lanches-Birigui_State_of_Sao_Paulo.html",
              "write_review": "https://www.tripadvisor.com/UserReview-g1832989-d8203221-Carlinhos_Lanches-Birigui_State_of_Sao_Paulo.html",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "city",
                      "name": "City"
                    }
                  ],
                  "name": "Birigui",
                  "abbrv": null,
                  "location_id": "1832989"
                },
                {
                  "subcategory": [
                    {
                      "key": "state",
                      "name": "State"
                    }
                  ],
                  "name": "State of Sao Paulo",
                  "abbrv": "SP",
                  "location_id": "303598"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Brazil",
                  "abbrv": null,
                  "location_id": "294280"
                }
              ],
              "category": {
                "key": "restaurant",
                "name": "Restaurant"
              },
              "subcategory": [],
              "parent_display_name": "Birigui",
              "is_jfy_enabled": false,
              "nearest_metro_station": [],
              "address_obj": {
                "street1": "Rua Angelina Anhe Demarque 141",
                "street2": "ReSao Pedro Marin Berbel",
                "city": "Birigui",
                "state": "SP",
                "country": "Brazil",
                "postalcode": null
              },
              "address": "Rua Angelina Anhe Demarque 141 ReSao Pedro Marin Berbel, Birigui, State of Sao Paulo Brazil",
              "is_candidate_for_contact_info_suppression": false,
              "cuisine": [],
              "dietary_restrictions": [],
              "establishment_types": [
                {
                  "key": "10591",
                  "name": "Restaurants"
                }
              ]
            },
            {
              "location_id": "8206543",
              "name": "Pimenta Rosa",
              "latitude": "-21.287018",
              "longitude": "-50.348915",
              "num_reviews": "0",
              "timezone": "America/Sao_Paulo",
              "location_string": "Birigui, State of Sao Paulo",
              "awards": [],
              "doubleclick_zone": "sa.brazil.state_of_sao_paulo",
              "preferred_map_engine": "default",
              "distance": "0.7063825427221136",
              "distance_string": "0.7 km",
              "bearing": "east",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "description": "",
              "web_url": "https://www.tripadvisor.com/Restaurant_Review-g1832989-d8206543-Reviews-Pimenta_Rosa-Birigui_State_of_Sao_Paulo.html",
              "write_review": "https://www.tripadvisor.com/UserReview-g1832989-d8206543-Pimenta_Rosa-Birigui_State_of_Sao_Paulo.html",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "city",
                      "name": "City"
                    }
                  ],
                  "name": "Birigui",
                  "abbrv": null,
                  "location_id": "1832989"
                },
                {
                  "subcategory": [
                    {
                      "key": "state",
                      "name": "State"
                    }
                  ],
                  "name": "State of Sao Paulo",
                  "abbrv": "SP",
                  "location_id": "303598"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Brazil",
                  "abbrv": null,
                  "location_id": "294280"
                }
              ],
              "category": {
                "key": "restaurant",
                "name": "Restaurant"
              },
              "subcategory": [],
              "parent_display_name": "Birigui",
              "is_jfy_enabled": false,
              "nearest_metro_station": [],
              "address_obj": {
                "street1": "Rua Tupi 719 Letra a",
                "street2": "Centro",
                "city": "Birigui",
                "state": "SP",
                "country": "Brazil",
                "postalcode": null
              },
              "address": "Rua Tupi 719 Letra a Centro, Birigui, State of Sao Paulo Brazil",
              "is_candidate_for_contact_info_suppression": false,
              "cuisine": [],
              "dietary_restrictions": [],
              "establishment_types": [
                {
                  "key": "10591",
                  "name": "Restaurants"
                }
              ]
            },
            {
              "location_id": "21241397",
              "name": "Padarias Fatima",
              "latitude": "-21.291801",
              "longitude": "-50.350452",
              "num_reviews": "0",
              "timezone": "America/Sao_Paulo",
              "location_string": "Birigui, State of Sao Paulo",
              "awards": [],
              "doubleclick_zone": "sa.brazil.state_of_sao_paulo",
              "preferred_map_engine": "default",
              "distance": "0.6235452186220185",
              "distance_string": "0.6 km",
              "bearing": "southeast",
              "is_closed": false,
              "is_long_closed": false,
              "price_level": "",
              "description": "",
              "web_url": "https://www.tripadvisor.com/Restaurant_Review-g1832989-d21241397-Reviews-Padarias_Fatima-Birigui_State_of_Sao_Paulo.html",
              "write_review": "https://www.tripadvisor.com/UserReview-g1832989-d21241397-Padarias_Fatima-Birigui_State_of_Sao_Paulo.html",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "city",
                      "name": "City"
                    }
                  ],
                  "name": "Birigui",
                  "abbrv": null,
                  "location_id": "1832989"
                },
                {
                  "subcategory": [
                    {
                      "key": "state",
                      "name": "State"
                    }
                  ],
                  "name": "State of Sao Paulo",
                  "abbrv": "SP",
                  "location_id": "303598"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Brazil",
                  "abbrv": null,
                  "location_id": "294280"
                }
              ],
              "category": {
                "key": "restaurant",
                "name": "Restaurant"
              },
              "subcategory": [],
              "parent_display_name": "Birigui",
              "is_jfy_enabled": false,
              "nearest_metro_station": [],
              "phone": "+55 18 3642-3575",
              "website": "http://www.facebook.com/padariafatimabg/?rf=353688888094093",
              "address_obj": {
                "street1": "R. Padre Geraldo Goseling, 509",
                "street2": null,
                "city": "Birigui",
                "state": "SP",
                "country": "Brazil",
                "postalcode": "16200-000"
              },
              "address": "R. Padre Geraldo Goseling, 509, Birigui, State of Sao Paulo 16200-000 Brazil",
              "is_candidate_for_contact_info_suppression": false,
              "cuisine": [
                {
                  "key": "10642",
                  "name": "Cafe"
                }
              ],
              "dietary_restrictions": [],
              "establishment_types": [
                {
                  "key": "10591",
                  "name": "Restaurants"
                }
              ]
            },
            {
              "location_id": "1832989",
              "ad_position": "inline1",
              "ad_size": "8X8",
              "doubleclick_zone": "sa.brazil.state_of_sao_paulo",
              "ancestors": [
                {
                  "subcategory": [
                    {
                      "key": "state",
                      "name": "State"
                    }
                  ],
                  "name": "State of Sao Paulo",
                  "abbrv": "SP",
                  "location_id": "303598"
                },
                {
                  "subcategory": [
                    {
                      "key": "country",
                      "name": "Country"
                    }
                  ],
                  "name": "Brazil",
                  "abbrv": null,
                  "location_id": "294280"
                }
              ],
              "detail": "0",
              "page_type": "restaurants",
              "mob_ptype": "app_restaurants"
            }
          ]

        // data test End

        return data;
    } catch (error) {
        console.log(error)
    }
}