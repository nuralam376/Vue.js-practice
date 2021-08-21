export default function(context) {
  const { $axios, redirect } = context;

  $axios.$get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
    console.log(res);
    if (res.status === 200) {
      return redirect("/");
    }
  });

  console.log("Test Middleware");
}
