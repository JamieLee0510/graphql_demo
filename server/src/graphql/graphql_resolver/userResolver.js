// const UserModel = require('../../models/User') //假設之後有DB

const userResolver = {
    user: async (parent, args, context, info) => {
        console.log("---context:", context);
        try {
            // const user = await User.findById(args.id); // 從DB中獲取
            const user = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        id: args.id,
                        name: "John Doe",
                        email: "xxx@gmail.com",
                        address: {
                            city: "台北",
                        },
                    });
                }, 1000); // 模擬異步操作
            });

            return user;
        } catch (err) {
            throw new Error(err);
        }
    },
};

module.exports = {
    userResolver,
};
