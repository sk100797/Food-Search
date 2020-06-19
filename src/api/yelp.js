import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5MkrNIb4cQQukufLd35Z0Hu4tjomUwyaxdFQ3Qy0wB918btIF5Ku28psfkctqRDbi_OdrgNr7fgxC9yZjotwArkcP5IMwvgxMrskLHy_lUxP5YX1zwogT7hhXlvrXnYx",
  },
});
