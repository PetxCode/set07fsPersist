import axios from "axios";
import lodash from "lodash";

const url: string = "http://localhost:4455/api";
const myURL: string = "http://localhost:4455";

export const registerUser = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };

    return await axios
      .post(`${url}/create-auth`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${url}/sign-in-auth`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readMyEndPoint = async (data: any) => {
  try {
    return await axios.post(`${myURL}/data`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getMyEndPoint = async () => {
  try {
    return await axios.get(`${myURL}/read`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getYoutubeVideos = async (search: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: search,
      part: "snippet,id",
      regionCode: "NG",
      maxResults: "20",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "d43233c2camsh5531fe5cecde0fdp19920cjsnfa451c6cc4e7",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    // localStorage.setItem("youtube", JSON.stringify(response.data.items));

    // const check = [{ name: [1, 7] }, { stack: [7, 3] }, { c: [0, 5, 8] }];
    const check = await getMyEndPoint();
    // const compare = a;

    if (lodash.some(check, search)) {
      return check;
    } else {
      const response = await axios.request(options);
      let keyValue = search;
      const newData = {
        [keyValue]: response.data.items,
      };

      readMyEndPoint({ data: newData });

      return response.data.items;
    }
  } catch (error) {
    console.error(error);
  }
};
