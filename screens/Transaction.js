import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView
} from 'react-native';

import { HeaderBar, CurrencyLabel, TextButton, TransactionHistory} from "../components"

import { dummyData, COLORS, SIZES, FONTS } from "../constants"

const Transaction = ({ route }) => {

    const [selectedCurrency, setSelectedCurrency ] = React.useState(null)

    React.useEffect(() => {
        const { currency } = route.params
        setSelectedCurrency(currency)
    }, [])

    function renderTrade() {
        console.log("selectedCurrency ", selectedCurrency)
        return(
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <CurrencyLabel
                    icon={selectedCurrency?.image}
                    currency={selectedCurrency?.currency}
                    code={selectedCurrency?.code}
                />
                <View
                    style={{
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding * 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{...FONTS.h2}}>{selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>${selectedCurrency?.wallet.value}</Text>
                </View>
                <TextButton
                    label="Trade"
                    onPress={() => console.log("Trade")}
                />
            </View>
        )
    }

    function renderTransactionHistory(){
        return (
            <TransactionHistory
                customContainerStyle={{
                    ...styles.shadow
                }}
                history={selectedCurrency?.transactionHistory}
            />
        )
    }

    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <HeaderBar right={false}/>

            <ScrollView>
                <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
                    {renderTrade()}
                    {renderTransactionHistory()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Transaction;