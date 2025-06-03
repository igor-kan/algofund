
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Bot, Zap, Users, BarChart3, Brain, Shield, Sparkles, ArrowUp, ArrowDown } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(4847.32);
  const [aiConfidence, setAiConfidence] = useState(87);

  useEffect(() => {
    setMounted(true);
    
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setCurrentPrice(prev => prev + (Math.random() - 0.5) * 5);
      setAiConfidence(prev => Math.max(70, Math.min(95, prev + (Math.random() - 0.5) * 3)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const strategies = [
    { name: "AI Momentum Alpha", return: "+24.7%", sharpe: "2.3", status: "active", confidence: 94 },
    { name: "Sentiment Fusion", return: "+18.2%", sharpe: "1.9", status: "active", confidence: 89 },
    { name: "Options Flow AI", return: "+31.5%", sharpe: "2.7", status: "testing", confidence: 92 },
    { name: "Macro Signal Engine", return: "+15.8%", sharpe: "1.6", status: "active", confidence: 86 }
  ];

  const leaderboard = [
    { rank: 1, name: "QuantMaster_AI", return: "+127.3%", strategies: 12 },
    { rank: 2, name: "AlphaSeeker", return: "+98.7%", strategies: 8 },
    { rank: 3, name: "DataDriven", return: "+85.2%", strategies: 15 },
    { rank: 4, name: "AITrader_Pro", return: "+76.9%", strategies: 6 }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen gradient-bg text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              QuantumFund AI
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Strategies</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Leaderboard</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Research</a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Trading
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            AI-Powered Hedge Fund
            <br />for Everyone
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of quantitative trading with our AI-native platform. 
            Build, test, and deploy strategies using natural language prompts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-4">
              <Sparkles className="w-5 h-5 mr-2" />
              Try Free Simulator
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Live Performance
            </Button>
          </div>
        </div>

        {/* Real-time Market Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Live AI Analysis */}
          <Card className="gradient-card col-span-1 lg:col-span-2 glow-blue">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Bot className="w-6 h-6 mr-2 text-blue-400" />
                Live AI Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">S&P 500</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-green-400">${currentPrice.toFixed(2)}</span>
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    +1.24% Today
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    AI Confidence: {aiConfidence}%
                  </Badge>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-gray-300 mb-2">AI Insight:</p>
                  <p className="text-white">"Bullish momentum detected. Options flow suggests continued upward pressure. Recommended allocation: 75% long equity, 25% hedged positions."</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Performance Metrics */}
          <Card className="gradient-card glow-green">
            <CardHeader>
              <CardTitle className="text-white">AI Fund Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">+47.2%</div>
                <div className="text-gray-400">YTD Return</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sharpe Ratio</span>
                  <span className="text-white font-semibold">2.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Drawdown</span>
                  <span className="text-white font-semibold">-4.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Win Rate</span>
                  <span className="text-white font-semibold">73%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Strategies</span>
                  <span className="text-white font-semibold">24</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="strategies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-white/10">
            <TabsTrigger value="strategies" className="data-[state=active]:bg-blue-600">
              AI Strategies
            </TabsTrigger>
            <TabsTrigger value="builder" className="data-[state=active]:bg-purple-600">
              Strategy Builder
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-green-600">
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="research" className="data-[state=active]:bg-orange-600">
              Research Lab
            </TabsTrigger>
          </TabsList>

          {/* AI Strategies Tab */}
          <TabsContent value="strategies" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <Card key={index} className="gradient-card hover:glow-blue transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{strategy.name}</CardTitle>
                      <Badge className={`${strategy.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                        {strategy.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">YTD Return</span>
                        <span className="text-2xl font-bold text-green-400">{strategy.return}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Sharpe Ratio</span>
                        <span className="text-white font-semibold">{strategy.sharpe}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">AI Confidence</span>
                          <span className="text-white">{strategy.confidence}%</span>
                        </div>
                        <Progress value={strategy.confidence} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Strategy Builder Tab */}
          <TabsContent value="builder" className="space-y-6">
            <Card className="gradient-card glow-purple">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Zap className="w-6 h-6 mr-2 text-purple-400" />
                  Natural Language Strategy Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/30">
                    <textarea 
                      className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none"
                      rows={4}
                      placeholder="Describe your trading strategy in plain English... 

Example: 'Create a momentum strategy that buys stocks when they break above 20-day moving average with volume 2x higher than average, but only during the first hour of trading.'"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Bot className="w-4 h-4 mr-2" />
                      Generate Strategy
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Backtest
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-4">
            <Card className="gradient-card glow-green">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Users className="w-6 h-6 mr-2 text-green-400" />
                  Top Performers This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                          {user.rank}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{user.name}</div>
                          <div className="text-gray-400 text-sm">{user.strategies} strategies</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-lg">{user.return}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Lab Tab */}
          <TabsContent value="research" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="gradient-card">
                <CardHeader>
                  <CardTitle className="text-white">Market Signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">VIX Level</span>
                      <span className="text-yellow-400">18.7 (Moderate)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Options Flow</span>
                      <span className="text-green-400">Bullish</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Sentiment</span>
                      <span className="text-blue-400">Optimistic</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card">
                <CardHeader>
                  <CardTitle className="text-white">AI Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-300">
                      • Earnings season showing strong tech fundamentals
                    </div>
                    <div className="text-sm text-gray-300">
                      • Federal Reserve signals dovish tone
                    </div>
                    <div className="text-sm text-gray-300">
                      • Institutional money flow into growth sectors
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center py-16 space-y-6">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Join the Future of Trading?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with paper trading, climb the leaderboards, and potentially join our real fund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              <Shield className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
