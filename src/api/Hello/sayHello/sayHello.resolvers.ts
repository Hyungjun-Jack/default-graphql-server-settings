import { Greeting } from "../../../types/graph";

const resolvers = {
    Query: {
        sayHello: (): Greeting => {
            return {
                text: "Greeting",
                error: false
            }
        }
    }
};

export default resolvers;