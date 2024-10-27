    import React, { useState, useEffect } from 'react';
    import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
    import { Slider } from '../ui/Slider'; 
    import { Input } from '../ui/Input';  
    import { Button } from '../ui/Button'; 
    import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
    import { Smile, Meh, Frown, TrendingUp, TrendingDown } from 'lucide-react';

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

        // Calculate growth rate
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
        <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100">
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
            <CardTitle className="text-2xl font-bold text-center text-purple-700">Animated SIP Calculator</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            <div>
                <label className="block mb-2 text-purple-700">Monthly Investment (₹)</label>
                <Input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full border-purple-300 focus:border-purple-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-purple-700">Investment Period (Years): {investmentPeriod}</label>
                <Slider
                value={[investmentPeriod]}
                onValueChange={([value]) => setInvestmentPeriod(value)}
                max={30}
                step={1}
                className="text-purple-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-purple-700">Expected Return Rate (%): {expectedReturnRate}</label>
                <Slider
                value={[expectedReturnRate]}
                onValueChange={([value]) => setExpectedReturnRate(value)}
                max={20}
                step={0.1}
                className="text-purple-500"
                />
            </div>
            <Button onClick={calculateSIP} className="w-full bg-purple-600 hover:bg-purple-700">Calculate</Button>
            <div className="text-center text-xl font-bold mt-4 text-purple-700">
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
            <div className="flex items-center justify-center space-x-4">
                <div className="pet-animation">
                <PetEmoji />
                </div>
                <div className="text-lg font-semibold">
                {growthRate > 0 ? (
                    <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1" /> +{growthRate.toFixed(2)}%
                    </span>
                ) : (
                    <span className="text-red-500 flex items-center">
                    <TrendingDown className="mr-1" /> {growthRate.toFixed(2)}%
                    </span>
                )}
                </div>
            </div>
            </div>
        </CardContent>
        </Card>
    );
    };

    export default AnimatedSIPCalculator