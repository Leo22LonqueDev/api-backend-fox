module.exports = {

    createOrcamento: async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    }
    
}