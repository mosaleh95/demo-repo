

module.exports = (sequelize, DataTypes) => {
    const Postpaid_Transactions = sequelize.define("Postpaid_Trx", {
        Billing_Number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Due_Ammount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer_Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Postpaid_Transactions
}