import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Slider } from '../ui/Slider'; 
import { Input } from '../ui/Input';  
import { Button } from '../ui/Button'; 
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Smile, Meh, Frown, TrendingUp, TrendingDown } from 'lucide-react';
import './Tools.css';
const AnimatedSIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [investmentPeriod, setInvestmentPeriod] = useState(10);
    const [expectedReturnRate, setExpectedReturnRate] = useState(12);
    const [totalValue, setTotalValue] = useState(0);
    const [chartData, setChartData] = useState([]);
    const [petMood, setPetMood] = useState('neutral');
    const [growthRate, setGrowthRate] = useState(0);

    const calculateSIP = () => {
        const monthlyRate = expectedReturnRate / 12 / 100;
        const months = investmentPeriod * 12;
        const totalAmount = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        
        setTotalValue(totalAmount);

        const newChartData = [];
        for (let i = 0; i <= months; i++) {
            const amount = monthlyInvestment * ((Math.pow(1 + monthlyRate, i) - 1) / monthlyRate) * (1 + monthlyRate);
            newChartData.push({ month: i, value: amount });
        }
        setChartData(newChartData);

        const totalInvestment = monthlyInvestment * months;
        const growth = totalAmount - totalInvestment;
        const newGrowthRate = (growth / totalInvestment) * 100;
        setGrowthRate(newGrowthRate);

        // Set pet mood based on growth rate
        if (newGrowthRate > 100) setPetMood('excited');
        else if (newGrowthRate > 50) setPetMood('happy');
        else if (newGrowthRate > 0) setPetMood('neutral');
        else setPetMood('sad');
    };

    useEffect(() => {
        calculateSIP();
    }, [monthlyInvestment, investmentPeriod, expectedReturnRate]);

    const PetEmoji = () => {
        switch (petMood) {
            case 'excited': return <Smile className="w-16 h-16 text-green-500" />;
            case 'happy': return <Smile className="w-16 h-16 text-yellow-500" />;
            case 'neutral': return <Meh className="w-16 h-16 text-blue-500" />;
            case 'sad': return <Frown className="w-16 h-16 text-red-500" />;
            default: return <Meh className="w-16 h-16 text-gray-500" />;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Full-height parent container */}
            <Card className="w-full max-w-3xl bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg rounded-lg overflow-hidden">
                <style jsx>{`
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    @keyframes rotate {
                        0% { transform: rotate(0deg); }
                        25% { transform: rotate(5deg); }
                        75% { transform: rotate(-5deg); }
                        100% { transform: rotate(0deg); }
                    }
                    .pet-animation {
                        animation: bounce 2s infinite, rotate 2s infinite;
                    }
                `}</style>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-purple-700">SIP Calculator</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="space-x-6">
                        <div className="text-center flex-1">
                            <label className="block mb-2 text-purple-700">Monthly Investment (₹)</label>
                            <Input
                                type="number"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                className="w-full max-w-xs mx-auto border-purple-300 focus:border-purple-500"
                            />
                        </div>
                        <div className="text-center flex-1">
                            <label className="block mb-2 text-purple-700">Investment Period (Years): {investmentPeriod}</label>
                            <Slider
                                value={[investmentPeriod]}
                                onValueChange={([value]) => setInvestmentPeriod(value)}
                                max={30}
                                step={1}
                                className="text-purple-500 mx-auto"
                            />
                        </div>
                        <div className="text-center flex-1">
                            <label className="block mb-2 text-purple-700">Expected Return Rate (%): {expectedReturnRate}</label>
                            <Slider
                                value={[expectedReturnRate]}
                                onValueChange={([value]) => setExpectedReturnRate(value)}
                                max={20}
                                step={0.1}
                                className="text-purple-500 mx-auto"
                            />
                        </div>
                        <div className="sipbutton">
                        <Button onClick={calculateSIP} className="w-full bg-purple-600 hover:bg-purple-700 text-black-important" style={{ color: "black" }}>
  Calculate
</Button>
                        </div>
                        <div className="text-center text-2xl font-bold mt-4 text-purple-700">
                            Total Value: ₹{totalValue.toFixed(2)}
                        </div>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <XAxis dataKey="month" stroke="#8884d8" />
                                    <YAxis stroke="#8884d8" />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} animationDuration={2000} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="sipbutton pet-animation flex justify-center items-center">
                                    <PetEmoji />
                                </div>
                                <div className="text-lg font-semibold text-center">
                                    {growthRate > 0 ? (
                                        <span className="text-green-500 flex items-center justify-center">
                                            <TrendingUp className="mr-1" /> +{growthRate.toFixed(2)}%
                                        </span>
                                    ) : (
                                        <span className="text-red-500 flex items-center justify-center">
                                            <TrendingDown className="mr-1" /> {growthRate.toFixed(2)}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AnimatedSIPCalculator;
