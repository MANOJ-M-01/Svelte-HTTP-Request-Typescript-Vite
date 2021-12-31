<script lang="ts">
  import { Fetch, Axios } from "../lib/HTTP";

  const url = "https://jsonplaceholder.typicode.com/todos";

  const FetchRequest = async () => {
    let res = await Fetch(url);
    let data = res;
    console.log(data);
  };

  const AxiosRequest = async () => {
    let req = {
      method: "GET",
      url: url,
    };
    let res = await Axios(req);
    let { data } = res;
    console.log(data);
  };

  FetchRequest();
  AxiosRequest();
</script>
