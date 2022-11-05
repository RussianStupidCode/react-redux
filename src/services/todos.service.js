import httpService from "./http.service";
import { faker } from "@faker-js/faker";

const todosEndepoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });

    return data;
  },
  create: async (title, completed) => {
    const { data } = await httpService.post(todosEndepoint, {
      title,
      completed,
    });

    return { ...data, id: faker.datatype.uuid() }; // т.к. id по умолчанию всегда 201, чтобы реакт не ругался
  },
};
export default todosService;
