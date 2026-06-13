
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Droplets, Apple, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DietPlan = () => {
  const [waterIntake, setWaterIntake] = useState(6); // glasses
  const [currentDay, setCurrentDay] = useState("today");
  const { toast } = useToast();

  const incrementWater = () => {
    setWaterIntake(prev => prev + 1);
    toast({
      title: "Water Intake Updated",
      description: `Now tracking ${waterIntake + 1} glasses`,
    });
  };

  const decrementWater = () => {
    if (waterIntake > 0) {
      setWaterIntake(prev => prev - 1);
      toast({
        title: "Water Intake Updated",
        description: `Now tracking ${waterIntake - 1} glasses`,
      });
    }
  };

  const dietPlans = {
    today: {
      breakfast: [
        "1 bowl oats with almonds and fruits",
        "1 glass fresh orange juice",
        "Prenatal vitamin"
      ],
      lunch: [
        "2 roti with dal and vegetables",
        "1 bowl rice",
        "Mixed vegetable salad",
        "1 glass buttermilk"
      ],
      dinner: [
        "Grilled fish/chicken with vegetables",
        "1 bowl brown rice",
        "Green leafy vegetable curry",
        "1 glass milk"
      ],
      snacks: [
        "Mixed nuts (almonds, walnuts)",
        "Fresh fruits (apple, banana)",
        "Whole grain crackers with cheese"
      ]
    },
    tomorrow: {
      breakfast: [
        "2 whole wheat parathas with curd",
        "1 glass milk with dates",
        "Fresh seasonal fruits"
      ],
      lunch: [
        "Quinoa salad with vegetables",
        "Grilled paneer tikka",
        "1 bowl sprouts",
        "Fresh lime water"
      ],
      dinner: [
        "2 roti with rajma curry",
        "Steamed broccoli and carrots",
        "1 bowl curd",
        "Herbal tea"
      ],
      snacks: [
        "Homemade granola bar",
        "Coconut water",
        "Dry fruits and seeds mix"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gestiva-light/20 to-gestiva-medium/30 p-6">
      <div 
        className="fixed inset-0 opacity-5 bg-contain bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/4b7c60ef-3ac8-4f9e-919a-6ebe93120366.png')`,
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/dashboard">
            <Button variant="outline" className="mr-4 border-gestiva-medium text-gestiva-medium hover:bg-gestiva-medium hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gestiva-darkest">Personalized Diet Plan</h1>
        </div>

        {/* Water Intake Tracker */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 animate-fade-in">
          <div className="text-center">
            <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gestiva-darkest mb-4">Daily Water Intake</h2>
            <div className="flex items-center justify-center space-x-6">
              <Button
                onClick={decrementWater}
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                size="lg"
              >
                <Minus className="w-6 h-6" />
              </Button>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{waterIntake}</div>
                <div className="text-gestiva-dark">glasses (8 oz each)</div>
                <div className="text-sm text-gestiva-dark mt-1">Recommended: 8-10 glasses</div>
              </div>
              
              <Button
                onClick={incrementWater}
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                size="lg"
              >
                <Plus className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Day Navigation */}
        <div className="flex justify-center space-x-4 mb-6 animate-fade-in">
          <Button
            onClick={() => setCurrentDay("today")}
            variant={currentDay === "today" ? "default" : "outline"}
            className={currentDay === "today" ? "bg-gestiva-medium text-white" : "border-gestiva-medium text-gestiva-medium hover:bg-gestiva-medium hover:text-white"}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Today's Plan
          </Button>
          <Button
            onClick={() => setCurrentDay("tomorrow")}
            variant={currentDay === "tomorrow" ? "default" : "outline"}
            className={currentDay === "tomorrow" ? "bg-gestiva-medium text-white" : "border-gestiva-medium text-gestiva-medium hover:bg-gestiva-medium hover:text-white"}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Tomorrow's Plan
          </Button>
        </div>

        {/* Diet Plan Cards */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg animate-scale-in">
            <CardHeader className="bg-orange-100">
              <CardTitle className="text-gestiva-darkest flex items-center">
                <Apple className="w-5 h-5 mr-2" />
                Breakfast
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2">
                {dietPlans[currentDay as keyof typeof dietPlans].breakfast.map((item, index) => (
                  <li key={index} className="text-gestiva-dark flex items-start">
                    <span className="text-gestiva-medium mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm shadow-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="bg-green-100">
              <CardTitle className="text-gestiva-darkest flex items-center">
                <Apple className="w-5 h-5 mr-2" />
                Lunch
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2">
                {dietPlans[currentDay as keyof typeof dietPlans].lunch.map((item, index) => (
                  <li key={index} className="text-gestiva-dark flex items-start">
                    <span className="text-gestiva-medium mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-gestiva-darkest flex items-center">
                <Apple className="w-5 h-5 mr-2" />
                Dinner
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2">
                {dietPlans[currentDay as keyof typeof dietPlans].dinner.map((item, index) => (
                  <li key={index} className="text-gestiva-dark flex items-start">
                    <span className="text-gestiva-medium mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm shadow-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="bg-yellow-100">
              <CardTitle className="text-gestiva-darkest flex items-center">
                <Apple className="w-5 h-5 mr-2" />
                Snacks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2">
                {dietPlans[currentDay as keyof typeof dietPlans].snacks.map((item, index) => (
                  <li key={index} className="text-gestiva-dark flex items-start">
                    <span className="text-gestiva-medium mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Nutritional Tips */}
        <div className="mt-6 bg-gestiva-light/20 rounded-2xl p-6 animate-fade-in">
          <h3 className="text-xl font-bold text-gestiva-darkest mb-4">Nutritional Tips for Pregnancy</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gestiva-dark">
            <ul className="space-y-2">
              <li>• Include folic acid rich foods (spinach, legumes)</li>
              <li>• Add calcium sources (dairy, sesame seeds)</li>
              <li>• Iron-rich foods (lean meat, dried fruits)</li>
            </ul>
            <ul className="space-y-2">
              <li>• Omega-3 fatty acids (fish, walnuts)</li>
              <li>• Avoid raw/undercooked foods</li>
              <li>• Limit caffeine and avoid alcohol</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
