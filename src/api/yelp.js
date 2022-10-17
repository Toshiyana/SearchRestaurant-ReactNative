import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wTaBiv0AOK8AcGqTsfd_e4VGGKC5HasuITOApfwCWOqfzRFaQNhetdL9QwACHTzbEVCqUq0kiXo6TqDnV53rssNVFi7YVFEYWcYX2s-yFvKife8oSGLDICSTaAlMY3Yx",
  },
});
