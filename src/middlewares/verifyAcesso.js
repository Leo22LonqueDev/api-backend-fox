module.exports = {
    verify: async (req, res) => {
        try {
            res.status(200).json({
                message: 'Verified',
                nome: req.user,
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: "Internal server error."
            })
        }
    }
}