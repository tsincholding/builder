import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Starter",
      specs: "2 vCPU • 4GB RAM • 50GB SSD",
      price: 19,
      quantity: 2,
    },
    {
      id: 2,
      name: "Professional",
      specs: "8 vCPU • 32GB RAM • 250GB SSD",
      price: 59,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-lg">N</span>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NodeX
            </span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Store</span>
        </Link>

        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground mb-6">Your cart is empty</p>
                <Link to="/">
                  <Button className="bg-primary hover:bg-primary/90">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{item.name} Plan</h3>
                      <p className="text-muted-foreground text-sm">{item.specs}</p>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right min-w-[100px]">
                        <p className="text-2xl font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ${item.price}/mo each
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Billing renews monthly. Cancel anytime.
              </p>

              <Link to="/checkout" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/" className="block mt-3">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-sm">N</span>
              </div>
              <span className="font-bold text-lg">NodeX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 NodeX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
