import { ref, onMounted, reactive } from "vue";

export const useReadmeProjects = () => {
  const loading = ref(true);
  const error = ref(false);

  const websites = ref<string[]>([]);
  const projects = ref<{ name: string; href: string; description: string }[]>(
    []
  );

  onMounted(async () => {
    const readme: { content: string } = await fetch(
      "https://api.github.com/repos/phineas/lanyard/readme",
      {
        headers: {
          "User-Agent": "Lanyard Web",
        },
      }
    )
      .then((r) => r.json())
      .catch(() => {
        error.value = true;
        loading.value = false;
      });

    const text = atob(readme.content).toString();
    const regexMatch = /\[(.*?)\]\((.*?)\)/;

    /* Community Projects */
    const projectsText = text.split("## Community Projects")[1].split("\n")[2];
    const communityProjectsDown = text.split(projectsText)[1];

    projects.value = communityProjectsDown
      .split("##")[0]
      .trim()
      .split("\\")
      .map((item) => {
        const [link, description] = item.replace(/\n/g, "").split(" - ");
        const match = link.match(regexMatch) ?? link;

        return {
          name: match[1],
          href: match[2],
          description,
        };
      });

    const websitesText = text.split("## Used By")[1].split("\n")[2];
    const websitesDown = text?.split(websitesText)?.[1];

    websites.value = websitesDown
      .split("##")[0]
      .trim()
      .split("\n")
      .map((item) => {
        const match = item.match(regexMatch);
        return match?.[1] ?? item;
      });

    loading.value = false;
  });

  return reactive({
    projects,
    websites,
    loading,
    error,
  });
};
