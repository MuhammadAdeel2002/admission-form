"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { CheckCircle, ChevronRight } from "lucide-react"

export default function AdmissionForm() {
  const [activeTab, setActiveTab] = useState("student")
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [formData, setFormData] = useState({
    // Student Info
    studentName: "",
    classLevel: "",
    gender: "male",
    city: "",
    area: "",
    campus: "",
    alternateSchool: "",

    // Parent Info
    parentName: "",
    relationship: "",
    email: "",
    phone: "",
    address: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Check if steps are valid
  const isStep1Valid = useCallback(() => {
    return formData.studentName.trim() !== "" && formData.classLevel !== ""
  }, [formData.studentName, formData.classLevel])

  const isStep2Valid = useCallback(() => {
    return formData.city !== "" && formData.area !== ""
  }, [formData.city, formData.area])

  const isStep3Valid = useCallback(() => {
    return formData.campus !== "" || formData.alternateSchool !== ""
  }, [formData.campus, formData.alternateSchool])

  // Update completed steps when form data changes
  useEffect(() => {
    const newCompletedSteps = [...completedSteps]

    if (isStep1Valid() && !newCompletedSteps.includes(1)) {
      newCompletedSteps.push(1)
    } else if (!isStep1Valid() && newCompletedSteps.includes(1)) {
      const index = newCompletedSteps.indexOf(1)
      newCompletedSteps.splice(index, 1)
    }

    if (isStep2Valid() && !newCompletedSteps.includes(2)) {
      newCompletedSteps.push(2)
    } else if (!isStep2Valid() && newCompletedSteps.includes(2)) {
      const index = newCompletedSteps.indexOf(2)
      newCompletedSteps.splice(index, 1)
    }

    if (isStep3Valid() && !newCompletedSteps.includes(3)) {
      newCompletedSteps.push(3)
    } else if (!isStep3Valid() && newCompletedSteps.includes(3)) {
      const index = newCompletedSteps.indexOf(3)
      newCompletedSteps.splice(index, 1)
    }

    if (JSON.stringify(newCompletedSteps) !== JSON.stringify(completedSteps)) {
      setCompletedSteps(newCompletedSteps)
    }
  }, [formData, completedSteps, isStep1Valid, isStep2Valid, isStep3Valid])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user selects
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateStep1 = useCallback(() => {
    const newErrors: Record<string, string> = {}

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required"
    }

    if (!formData.classLevel) {
      newErrors.classLevel = "Class level is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData.studentName, formData.classLevel])

  const validateStep2 = useCallback(() => {
    const newErrors: Record<string, string> = {}

    if (!formData.city) {
      newErrors.city = "City is required"
    }

    if (!formData.area) {
      newErrors.area = "Area is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData.city, formData.area])

  const validateStep3 = useCallback(() => {
    const newErrors: Record<string, string> = {}

    if (!formData.campus && !formData.alternateSchool) {
      newErrors.campus = "Please select a campus or alternate school"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData.campus, formData.alternateSchool])

  const validateParentForm = useCallback(() => {
    const newErrors: Record<string, string> = {}

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent name is required"
    }

    if (!formData.relationship) {
      newErrors.relationship = "Relationship is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData.parentName, formData.relationship, formData.email, formData.phone])

  const handleContinueToParent = () => {
    if (validateStep1() && validateStep2() && validateStep3()) {
      setActiveTab("parent")
      toast({
        title: "Student Information Completed",
        description: "Please fill in the parent information to complete your application.",
      })
    } else {
      toast({
        title: "Please check your form",
        description: "Please fill in all required fields in all steps.",
        variant: "destructive",
      })
    }
  }

  const handleTabChange = (value: string) => {
    // Only allow changing to parent tab if all steps are valid
    if (value === "parent") {
      if (completedSteps.includes(1) && completedSteps.includes(2) && completedSteps.includes(3)) {
        setActiveTab(value)
      } else {
        toast({
          title: "Please complete all steps",
          description: "You need to complete all student information steps first.",
          variant: "destructive",
        })
      }
    } else {
      setActiveTab(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateParentForm()) {
      setIsSubmitting(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Success
        setIsSubmitted(true)
        toast({
          title: "Application Submitted!",
          description: "Thank you for your application. We will contact you soon.",
        })
      } catch (error) {
        toast({
          title: "Submission failed",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    } else {
      toast({
        title: "Please check your form",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      })
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in our nursing college. Our team will review your application and contact you
          soon.
        </p>
        <p className="text-gray-600 mb-6">
          Application Reference: <span className="font-semibold">{`APP-${Date.now().toString().slice(-6)}`}</span>
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              studentName: "",
              classLevel: "",
              gender: "male",
              city: "",
              area: "",
              campus: "",
              alternateSchool: "",
              parentName: "",
              relationship: "",
              email: "",
              phone: "",
              address: "",
            })
            setActiveTab("student")
            setCompletedSteps([])
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-center text-amber-500 mb-3">Admission Enquiry Form</h1>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Secure your child&apos;s spot now - registrations are closing soon! Completing the form carries no obligation,
          so act now to connect with our representative!
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-none border-b">
          <TabsTrigger
            value="student"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-700 font-semibold rounded-none py-3"
          >
            STUDENT INFO
          </TabsTrigger>
          <TabsTrigger
            value="parent"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-700 font-semibold rounded-none py-3"
          >
            PARENT INFO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="student" className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div
              className={`border rounded-md p-6 transition-all duration-200 ${completedSteps.includes(1) ? "border-green-500 shadow-md" : "border-gray-200"}`}
            >
              <div className="mb-4 border-b pb-2 flex justify-between items-center">
                <h3 className="font-medium text-gray-700">STEP 1</h3>
                {completedSteps.includes(1) && <CheckCircle className="h-5 w-5 text-green-500" />}
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="studentName" className="block mb-1 text-gray-700">
                    Student Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className={errors.studentName ? "border-red-500" : ""}
                    required
                  />
                  {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>}
                </div>

                <div>
                  <Label htmlFor="classLevel" className="block mb-1 text-gray-700">
                    Select Program <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.classLevel}
                    onValueChange={(value) => handleSelectChange("classLevel", value)}
                  >
                    <SelectTrigger className={errors.classLevel ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery">BSN 4-year program</SelectItem>
                      <SelectItem value="kg">BSN 4-year program (FOR OVERSEAS STUDENT)</SelectItem>
                      <SelectItem value="1">Post-RN BSN 2-year Program</SelectItem>
                      
                    </SelectContent>
                  </Select>
                  {errors.classLevel && <p className="text-red-500 text-sm mt-1">{errors.classLevel}</p>}
                </div>

                <div>
                  <Label className="block mb-1 text-gray-700">
                    Student Gender <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleRadioChange("gender", value)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`border rounded-md p-6 transition-all duration-200 ${!completedSteps.includes(1) ? "opacity-50 pointer-events-none" : ""} ${completedSteps.includes(2) ? "border-green-500 shadow-md" : "border-gray-200"}`}
            >
              <div className="mb-4 border-b pb-2 flex justify-between items-center">
                <h3 className="font-medium text-gray-700">STEP 2</h3>
                {completedSteps.includes(2) && <CheckCircle className="h-5 w-5 text-green-500" />}
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="city" className="block mb-1 text-gray-700">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleSelectChange("city", value)}
                    disabled={!completedSteps.includes(1)}
                  >
                    <SelectTrigger className={errors.city ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="karachi">Karachi</SelectItem>
                      <SelectItem value="lahore">Lahore</SelectItem>
                      <SelectItem value="islamabad">Islamabad</SelectItem>
                      <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                      <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                  <Label htmlFor="area" className="block mb-1 text-gray-700">
                    Area <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.area}
                    onValueChange={(value) => handleSelectChange("area", value)}
                    disabled={!formData.city || !completedSteps.includes(1)}
                  >
                    <SelectTrigger className={errors.area ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="clifton">Clifton</SelectItem>
                      <SelectItem value="defence">Defence</SelectItem>
                      <SelectItem value="gulshan">Gulshan</SelectItem>
                      <SelectItem value="nazimabad">Nazimabad</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`border rounded-md p-6 transition-all duration-200 ${!completedSteps.includes(2) ? "opacity-50 pointer-events-none" : ""} ${completedSteps.includes(3) ? "border-green-500 shadow-md" : "border-gray-200"}`}
            >
              <div className="mb-4 border-b pb-2 flex justify-between items-center">
                <h3 className="font-medium text-gray-700">STEP 3</h3>
                {completedSteps.includes(3) && <CheckCircle className="h-5 w-5 text-green-500" />}
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="block mb-1 text-gray-700">
                    Recommended Campuses <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.campus}
                    onValueChange={(value) => {
                      handleRadioChange("campus", value)
                      if (value) {
                        handleSelectChange("alternateSchool", "")
                      }
                    }}
                    className="space-y-2 mt-2"
                    disabled={!completedSteps.includes(2)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="racecourse" id="racecourse" disabled={!completedSteps.includes(2)} />
                      <Label htmlFor="racecourse">Racecourse Branch</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="kg-campus" id="kg-campus" disabled={!completedSteps.includes(2)} />
                      <Label htmlFor="kg-campus">KG Campus, Malir</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-4">
                  <Label className="block mb-1 text-gray-700">
                    OR select another school within the city <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.alternateSchool}
                    onValueChange={(value) => {
                      handleSelectChange("alternateSchool", value)
                      if (value) {
                        handleSelectChange("campus", "")
                      }
                    }}
                    disabled={!!formData.campus || !completedSteps.includes(2)}
                  >
                    <SelectTrigger
                      className={errors.campus && !formData.campus && !formData.alternateSchool ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select a School" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school1">City Campus</SelectItem>
                      <SelectItem value="school2">North Campus</SelectItem>
                      <SelectItem value="school3">East Campus</SelectItem>
                      <SelectItem value="school4">South Campus</SelectItem>
                      <SelectItem value="school5">West Campus</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.campus && !formData.campus && !formData.alternateSchool && (
                    <p className="text-red-500 text-sm mt-1">{errors.campus}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center shadow-md transition-all duration-200"
              onClick={handleContinueToParent}
              disabled={!completedSteps.includes(1) || !completedSteps.includes(2) || !completedSteps.includes(3)}
            >
              Continue to Parent Info <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="parent" className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="parentName" className="block mb-1 text-gray-700">
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={errors.parentName ? "border-red-500" : ""}
                    required
                  />
                  {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <Label htmlFor="relationship" className="block mb-1 text-gray-700">
                    Relationship <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.relationship}
                    onValueChange={(value) => handleSelectChange("relationship", value)}
                  >
                    <SelectTrigger className={errors.relationship ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select Relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="guardian">Guardian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.relationship && <p className="text-red-500 text-sm mt-1">{errors.relationship}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="block mb-1 text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "border-red-500" : ""}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="block mb-1 text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "border-red-500" : ""}
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="address" className="block mb-1 text-gray-700">
                    Address
                  </Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleInputChange} />
                </div>

                <div className="pt-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        terms and conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        privacy policy
                      </a>
                      .
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={() => setActiveTab("student")}>
                Back to Student Info
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full shadow-md transition-all duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}
