export const getCurrentUser = async (req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in user controller in gateway");
        return res.status(500).json({ message: "Internal Server Error" });
    }
}