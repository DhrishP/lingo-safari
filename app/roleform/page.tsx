import Header from "@/components/Header/Header"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CardWithForm() {
  return (
    <div>
      <Header />
      <div className="mt-7 flex flex-col items-center gap-7">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Tell us about yourself</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name">Give Yourself a Nickname</Label>
              <Input id="name" placeholder="Username" />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="framework">Choose your Profession: </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="none">{" "}</SelectItem>
                  <SelectItem value="student">Student </SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Next</Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}

