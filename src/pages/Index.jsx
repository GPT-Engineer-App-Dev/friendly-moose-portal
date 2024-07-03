import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <section className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/moose-hero.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl text-white">Welcome to Moose World</h1>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-3xl mb-4">About Moose</h2>
        <p className="mb-8">
          Moose are the largest members of the deer family. They are known for their impressive size, distinctive antlers, and unique behaviors.
          Moose inhabit the forests of North America, Europe, and Asia. They are herbivores and primarily feed on leaves, bark, and aquatic plants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Diet</CardTitle>
            </CardHeader>
            <CardContent>
              Moose are herbivores and their diet consists of leaves, bark, and aquatic plants.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Habitat</CardTitle>
            </CardHeader>
            <CardContent>
              Moose are found in the forests of North America, Europe, and Asia.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              Moose are known for their solitary nature and unique behaviors, such as their distinctive mating calls.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;